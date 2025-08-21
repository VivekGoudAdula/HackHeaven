import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Clock, XCircle } from 'lucide-react';
import './QuizPage.css';

const QUIZ_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfxATX0RxhkyuUCzPqYs6eNNMjkKA-Prc3jym8YdhLrZzKBdQ/viewform?embedded=true';

const WarningModal = ({ onCancel, onSubmit, secondsLeft }: { onCancel: () => void, onSubmit: () => void, secondsLeft: number }) => (
  <div className="warning-modal-overlay">
    <div className="warning-modal">
      <div className="warning-header">
        <AlertTriangle className="warning-icon" size={32} />
        <h3>SECURITY WARNING</h3>
      </div>
      <div className="warning-body">
        <p><strong>Unauthorized exit detected!</strong></p>
        <p>Your attempt to exit fullscreen mode has been logged. Your quiz will be automatically submitted in:</p>
        <div className="countdown">
          <Clock className="countdown-icon" />
          <span className="countdown-number">{secondsLeft}</span>
        </div>
        <p className="warning-text">
          <XCircle className="inline-icon" /> <strong>Note:</strong> Multiple exit attempts will result in immediate submission and potential disqualification.
        </p>
      </div>
      <div className="warning-actions">
        <button onClick={onCancel} className="btn-cancel">
          Return to Quiz
        </button>
        <button onClick={onSubmit} className="btn-submit">
          Submit Now
        </button>
      </div>
    </div>
  </div>
);

export const QuizPage = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [exitAttempts, setExitAttempts] = useState(0);

  useEffect(() => {
    // Try to enter fullscreen when component mounts
    const enterFullscreen = async () => {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          // Try to lock the keyboard after entering fullscreen
          try {
            // @ts-ignore - Keyboard API is not fully supported in all browsers
            if (navigator.keyboard && navigator.keyboard.lock) {
              // @ts-ignore
              await navigator.keyboard.lock([
                'Escape', 'F11', 'F12', 'Tab', 'Alt', 'Control', 'Meta', 'Shift',
                'ContextMenu', 'PrintScreen', 'Pause', 'Insert', 'Home', 'PageUp',
                'Delete', 'End', 'PageDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
              ]);
            }
          } catch (keyboardErr) {
            console.warn('Keyboard lock not supported:', keyboardErr);
          }
        }
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err);
      }
    };

    enterFullscreen();

    // Handle fullscreen change events
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setExitAttempts(prev => prev + 1);
        setShowWarning(true);
        setCountdown(10);
        // Try to return to fullscreen immediately
        enterFullscreen().catch(console.error);
      }
    };

    // Add event listeners for fullscreen changes
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Block all keyboard shortcuts and system keys
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block all system key combinations
      if (
        e.altKey || 
        e.ctrlKey || 
        e.metaKey || 
        e.key === 'Tab' ||
        e.key === 'Escape' ||
        e.key === 'F1' || e.key === 'F2' || e.key === 'F3' ||
        e.key === 'F4' || e.key === 'F5' || e.key === 'F6' ||
        e.key === 'F7' || e.key === 'F8' || e.key === 'F9' ||
        e.key === 'F10' || e.key === 'F11' || e.key === 'F12' ||
        e.key === 'ContextMenu' || e.key === 'PrintScreen' ||
        e.key === 'Pause' || e.key === 'Insert' ||
        e.key === 'Home' || e.key === 'PageUp' ||
        e.key === 'Delete' || e.key === 'End' ||
        e.key === 'PageDown' || e.key === 'AltGraph' ||
        e.key === 'Alt' || e.key === 'Control' ||
        e.key === 'Meta' || e.key === 'Shift' ||
        e.key === 'OS' || e.key === 'Process' ||
        e.key === 'Unidentified' || e.key === 'CapsLock' ||
        e.key === 'NumLock' || e.key === 'ScrollLock' ||
        e.key === 'AudioVolumeUp' || e.key === 'AudioVolumeDown' ||
        e.key === 'AudioVolumeMute' || e.key === 'LaunchMediaPlayer' ||
        e.key === 'LaunchApplication1' || e.key === 'LaunchApplication2' ||
        e.key === 'LaunchMail' || e.key === 'MediaSelect' ||
        e.key === 'Power' || e.key === 'Sleep' ||
        e.key === 'WakeUp' || e.key === 'BrowserBack' ||
        e.key === 'BrowserFavorites' || e.key === 'BrowserForward' ||
        e.key === 'BrowserHome' || e.key === 'BrowserRefresh' ||
        e.key === 'BrowserSearch' || e.key === 'BrowserStop' ||
        e.key === 'Eject' || e.key === 'LaunchScreenSaver' ||
        e.key === 'LogOff' || e.key === 'PowerOff' ||
        e.key === 'SelectTask' || e.key === 'Standby' ||
        e.key === 'ZoomToggle' || e.key === 'LaunchContacts' ||
        e.key === 'LaunchPhone' || e.key === 'LaunchCalendar' ||
        e.key === 'LaunchWebCam' || e.key === 'LaunchWordProcessor' ||
        e.key === 'LaunchSpreadsheet' || e.key === 'LaunchPresentation' ||
        e.key === 'LaunchMail' || e.key === 'MediaPlayPause' ||
        e.key === 'MediaStop' || e.key === 'MediaTrackNext' ||
        e.key === 'MediaTrackPrevious' || e.key === 'MediaSelect' ||
        e.key === 'LaunchApp1' || e.key === 'LaunchApp2' ||
        e.key === 'LaunchScreenSaver' || e.key === 'BrowserSearch' ||
        e.key === 'BrowserHome' || e.key === 'BrowserBack' ||
        e.key === 'BrowserForward' || e.key === 'BrowserStop' ||
        e.key === 'BrowserRefresh' || e.key === 'BrowserFavorites' ||
        e.key === 'LaunchMail' || e.key === 'LaunchMediaPlayer' ||
        e.key === 'LaunchShortcut' || e.key === 'LaunchTaskManager' ||
        e.key === 'LaunchWebBrowser' || e.key === 'LaunchWebCam' ||
        e.key === 'LaunchWordProcessor' || e.key === 'MediaNextTrack' ||
        e.key === 'MediaPlay' || e.key === 'MediaPreviousTrack' ||
        e.key === 'MediaStop' || e.key === 'New' ||
        e.key === 'Open' || e.key === 'Print' ||
        e.key === 'Save' || e.key === 'SpellCheck' ||
        e.key === 'MailForward' || e.key === 'MailReply' ||
        e.key === 'MailSend' || e.key === 'Close' ||
        e.key === 'Copy' || e.key === 'Cut' ||
        e.key === 'Paste' || e.key === 'Undo' ||
        e.key === 'Redo' || e.key === 'Find' ||
        e.key === 'Help' || e.key === 'NewWindow' ||
        e.key === 'OpenLocation' || e.key === 'Reload' ||
        e.key === 'SaveAs' || e.key === 'Send' ||
        e.key === 'SpellCheck' || e.key === 'ZoomIn' ||
        e.key === 'ZoomOut' || e.key === 'ZoomToggle' ||
        e.key === 'Close' || e.key === 'Copy' ||
        e.key === 'Cut' || e.key === 'Paste' ||
        e.key === 'SelectAll' || e.key === 'Undo' ||
        e.key === 'Redo' || e.key === 'Find' ||
        e.key === 'FindAgain' || e.key === 'FindPrevious' ||
        e.key === 'FindNext' || e.key === 'Help' ||
        e.key === 'NewWindow' || e.key === 'OpenLocation' ||
        e.key === 'Print' || e.key === 'PrintScreen' ||
        e.key === 'Redo' || e.key === 'Refresh' ||
        e.key === 'Reload' || e.key === 'Replace' ||
        e.key === 'Save' || e.key === 'SaveAs' ||
        e.key === 'SelectAll' || e.key === 'Send' ||
        e.key === 'SpellCheck' || e.key === 'ZoomIn' ||
        e.key === 'ZoomOut' || e.key === 'ZoomToggle'
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }

      // Allow only basic typing keys (alphanumeric and basic punctuation)
      const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        ' ', 'Backspace', 'Enter', 'Tab', '.', ',', ';', ':', '\'', '"', '`',
        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=',
        '+', '[', ']', '{', '}', '\\', '|', '/', '?', '<', '>'
      ];
      
      if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown, true);

    // Cleanup
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown, true);
      
      // Unlock keyboard when component unmounts
      try {
        // @ts-ignore
        if (navigator.keyboard && navigator.keyboard.unlock) {
          // @ts-ignore
          navigator.keyboard.unlock();
        }
      } catch (err) {
        console.warn('Error unlocking keyboard:', err);
      }
    };
  }, [navigate]);

  // Handle countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showWarning && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showWarning && countdown === 0) {
      handleSubmit();
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showWarning, countdown]);

  const handleCancel = () => {
    setShowWarning(false);
    document.documentElement.requestFullscreen().catch(console.error);
  };

  const handleSubmit = () => {
    // Submit the form if possible
    const iframe = document.querySelector('iframe');
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage('submitForm', '*');
    }
    navigate('/quiz-exit');
  };

  return (
    <div className="quiz-container">
      {showWarning && (
        <WarningModal 
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          secondsLeft={countdown}
        />
      )}
      <div className={`security-header ${exitAttempts > 0 ? 'warning' : ''}`}>
        <div className="security-indicator">
          <div className="blink"></div>
          <span>SECURE QUIZ MODE ACTIVE</span>
          {exitAttempts > 0 && (
            <span className="attempts-warning">
              <XCircle size={16} /> {exitAttempts} unauthorized exit attempt{exitAttempts !== 1 ? 's' : ''} detected
            </span>
          )}
        </div>
      </div>
      <iframe
        src={QUIZ_FORM_URL}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Quiz Form"
        className="quiz-iframe"
        sandbox="allow-same-origin allow-scripts allow-forms"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default QuizPage;
