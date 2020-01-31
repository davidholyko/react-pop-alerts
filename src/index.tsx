import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Alert, { AlertProps } from 'react-bootstrap/Alert';
import './index.scss';

const sampleData: AutoDismissAlertProps[] = [
  {
    message: 'HEADER 1',
    variant: 'primary',
    heading: 'Lorem ipsum virumque cano troiae',
  },
  {
    message: 'HEADER 3',
    variant: 'secondary',
    heading: 'Lorem ipsum virumque cano troiae',
  },
  {
    message: 'HEADER 2',
    variant: 'success',
    heading: 'Lorem ipsum virumque cano troiae',
  },
];

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

const App = <ReactPopAlerts alerts={sampleData} />;

// ReactDOM.render(App, document.getElementById('root'));

export default ReactPopAlerts;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
