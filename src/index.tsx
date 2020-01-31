import React, { useState, useEffect } from 'react';
import Alert, { AlertProps } from 'react-bootstrap/Alert';
import './index.scss';

export interface ReactPopAlertsProps {
  alerts: AutoDismissAlertProps[];
}

export interface AutoDismissAlertProps {
  heading: string;
  message: string;
  variant: AlertProps['variant'];
  timeout?: number;
}

export const AutoDismissAlert: React.FC<AutoDismissAlertProps> = ({
  variant,
  heading,
  message,
  timeout = 1500,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setShow(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  const handleClose = () => setShow(false);

  return (
    <Alert
      className="alert"
      dismissible
      show={show}
      variant={variant}
      onClose={handleClose}
    >
      <div className="container">
        <h3>{heading}</h3>
        <p className="alert-body">{message}</p>
      </div>
    </Alert>
  );
};

export const ReactPopAlerts: React.FC<ReactPopAlertsProps> = ({ alerts }) => {
  return (
    <div>
      {alerts.map(({ heading, message, variant }, index) => (
        <AutoDismissAlert
          key={index}
          heading={heading}
          message={message}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default ReactPopAlerts;
