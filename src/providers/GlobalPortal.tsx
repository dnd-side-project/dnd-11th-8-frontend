import { createContext, PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

const GlobalPortalContext = createContext<HTMLDivElement | null>(null);

interface GlobalPortalProviderProps extends PropsWithChildren {}

const GlobalPortalProvider = ({ children }: GlobalPortalProviderProps) => {
  const [portalContainerRef, setPortalContainerRef] = useState<HTMLDivElement | null>(null);
  return (
    <GlobalPortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal-container"
        ref={(elem) => {
          if (elem === null && portalContainerRef !== null) {
            return;
          }
          setPortalContainerRef(elem);
        }}
      />
    </GlobalPortalContext.Provider>
  );
};

interface GlobalPortalConsumerProps extends PropsWithChildren {}

const GlobalPortalConsumer = ({ children }: GlobalPortalConsumerProps) => {
  return (
    <GlobalPortalContext.Consumer>
      {(portalContainerRef) => {
        if (portalContainerRef === null) {
          return;
        }

        return createPortal(children, portalContainerRef);
      }}
    </GlobalPortalContext.Consumer>
  );
};

export const GlobalPortal = {
  Provider: GlobalPortalProvider,
  Consumer: GlobalPortalConsumer,
};
