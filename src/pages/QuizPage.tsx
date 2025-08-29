import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const QuizPage = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  // Set initial border color to green
  useEffect(() => {
    setIsFirstVisit(true);
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Handle countdown timer
  const startCountdown = useCallback(() => {
    setCountdown(10);
    if (countdownRef.current) clearInterval(countdownRef.current);
    
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        document.body.classList.add('quiz-fullscreen');
        setShowWarning(false);
        if (countdownRef.current) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
        }
      } else {
        document.body.classList.remove('quiz-fullscreen');
        setShowWarning(true);
        startCountdown();
      }
    };

    // Enter fullscreen when component mounts
    toggleFullscreen();
    
    // Set up fullscreen change listener
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Clean up
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.body.classList.remove('quiz-fullscreen');
    };
  }, []);

  // Block all keyboard input in fullscreen
  useEffect(() => {
    const isFullscreen = () => !!document.fullscreenElement;
    
    // Block all keyboard events
    const blockKeyboard = (e: KeyboardEvent) => {
      if (isFullscreen()) {
        // Block all modifier keys that could be used for switching
        const blockedModifiers = [
          'Alt', 'AltGraph', 'AltLeft', 'AltRight',
          'Meta', 'MetaLeft', 'MetaRight', 'OSLeft', 'OSRight',
          'Control', 'ControlLeft', 'ControlRight',
          'Tab', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
        ];
        
        // Block Alt+Tab, Win+Tab, Ctrl+Esc, etc.
        const isTabKey = e.key === 'Tab' || e.keyCode === 9;
        const isAltKey = e.altKey || e.key === 'Alt' || e.key === 'AltGraph' || 
                        e.key === 'AltLeft' || e.key === 'AltRight';
        const isWinKey = e.metaKey || e.key === 'Meta' || e.key === 'OS' || 
                        e.keyCode === 91 || e.key === 'MetaLeft' || e.key === 'MetaRight';
        
        // Block all modifier combinations
        if (blockedModifiers.includes(e.key) || isAltKey || isWinKey || 
            (e.altKey && isTabKey) || (e.metaKey && isTabKey) ||
            (e.ctrlKey && e.key === 'Escape')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation?.();
          
          // Show a warning if they try to switch
          if ((isAltKey && isTabKey) || (isWinKey && isTabKey)) {
            setShowWarning(true);
            setCountdown(10); // Reset countdown if they try to switch
          }
          
          return false;
        }
        
        // Allow only specific keys needed for the quiz
        const allowedKeys = [
          'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
          'Enter', 'Backspace', 'Delete', ' ', 
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          'Shift', 'CapsLock', 'Space'
        ];
        
        if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation?.();
          return false;
        }
      }
    };
    
    // Block context menu
    const blockContextMenu = (e: MouseEvent) => {
      if (isFullscreen()) {
        e.preventDefault();
        return false;
      }
    };
    
    // Block all input events
    const blockInput = (e: Event) => {
      if (isFullscreen()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation?.();
        return false;
      }
    };
    
    // Add event listeners with capture phase and passive: false
    const options = { capture: true, passive: false };
    
    // Block all keyboard events
    document.addEventListener('keydown', blockKeyboard, options);
    document.addEventListener('keyup', blockKeyboard, options);
    document.addEventListener('keypress', blockKeyboard, options);
    
    // Block other input methods
    document.addEventListener('contextmenu', blockContextMenu, options);
    document.addEventListener('paste', blockInput, options);
    document.addEventListener('copy', blockInput, options);
    document.addEventListener('cut', blockInput, options);
    
    // Prevent window losing focus
    let blurTimeout: NodeJS.Timeout;
    
    const handleBlur = () => {
      if (isFullscreen()) {
        // Try to refocus immediately
        window.focus();
        
        // Force focus back if needed
        blurTimeout = setTimeout(() => {
          if (document.activeElement !== document.body) {
            document.body.focus();
          }
          window.focus();
        }, 10);
      }
    };
    
    window.addEventListener('blur', handleBlur);
    
    // Prevent right-click menu
    document.addEventListener('contextmenu', (e) => {
      if (isFullscreen()) {
        e.preventDefault();
        return false;
      }
    }, true);
    
    // Prevent leaving the page
    window.onbeforeunload = (e) => {
      if (isFullscreen()) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };
    
    // Block iframe keyboard events
    const blockIframeEvents = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            iframeDoc.addEventListener('keydown', blockKeyboard, options);
            iframeDoc.addEventListener('keyup', blockKeyboard, options);
            iframeDoc.addEventListener('keypress', blockKeyboard, options);
          }
        } catch (e) {
          // Cross-origin iframe, can't access contentDocument
        }
      }
    };
    
    // Set up iframe blocking
    const iframeInterval = setInterval(blockIframeEvents, 1000);
    
    // Initial iframe blocking
    if (iframeRef.current) {
      iframeRef.current.onload = blockIframeEvents;
    }

    return () => {
      // Clean up all event listeners
      const options = { capture: true };
      
      // Remove keyboard event listeners
      document.removeEventListener('keydown', blockKeyboard, options);
      document.removeEventListener('keyup', blockKeyboard, options);
      document.removeEventListener('keypress', blockKeyboard, options);
      
      // Remove other event listeners
      document.removeEventListener('contextmenu', blockContextMenu, options);
      document.removeEventListener('paste', blockInput, options);
      document.removeEventListener('copy', blockInput, options);
      document.removeEventListener('cut', blockInput, options);
      window.removeEventListener('blur', handleBlur);
      
      // Clear intervals and timeouts
      clearInterval(iframeInterval);
      if (blurTimeout) clearTimeout(blurTimeout);
      
      // Reset window event handlers
      window.onbeforeunload = null;
      
      // Exit fullscreen when component unmounts
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      document.body.classList.remove('quiz-fullscreen');
    };
  }, []);

  const handleReturnToQuiz = () => {
    toggleFullscreen();
    setShowWarning(false);
    // Change border to red after returning from warning
    setIsFirstVisit(false);
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  };

  const handleSubmitQuiz = () => {
    // Add your quiz submission logic here
    console.log('Submitting quiz...');
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    navigate('/events/40in40');
  };

  const handleExitQuiz = () => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        navigate('/events/40in40');
      });
    } else {
      navigate('/events/40in40');
    }
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 bg-black flex flex-col overflow-hidden`}
    >
      {/* Neon Border Effect */}
      <div className={`absolute inset-0 ${
        isFirstVisit 
          ? 'neon-glow-green' 
          : 'neon-glow-red'
      }`}></div>
      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4 border border-red-500">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Warning!</h2>
            <p className="text-white mb-6">
              Return to the quiz or your answers will be automatically submitted in {countdown} seconds.
            </p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-red-500 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 10) * 100}%` }}
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleReturnToQuiz}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Return to Quiz
              </button>
              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-black p-4 flex justify-between items-center border-b border-gray-800 relative z-10">
        <h1 className="text-xl font-bold text-white">40-in-40 Quiz</h1>
        <button 
          onClick={handleExitQuiz}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
          title="Exit Quiz"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full h-full max-w-6xl">
          <iframe 
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJZSuRhlMaoHHdWW6GmAcTTnT6jN2pgRQF-OlcdtUKisfDtA/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="bg-black"
            style={{ minHeight: 'calc(100vh - 120px)' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
