import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../buttons';
import { Blanket } from '../blanket';
import { StyledModal, StyledModalControls, StyledModalButtons } from './style';

const Modal = ({ labels, modal, setModal }) => {
  const [step, setSteps] = useState(0);

  const handleNext = () => {
    setSteps((prev) => prev + 1);
  };

  const handleSkip = () => {
    setModal(false);
  };

  if (!modal) {
    return null;
  }

  return ReactDOM.createPortal(
    <Blanket>
      <StyledModal>
        <p>{labels[step]}</p>
        <StyledModalControls>
          <p>
            {step + 1}/{labels.length}
          </p>
          <StyledModalButtons>
            {step + 1 === labels.length ? (
              <Button purpose="modal" label="Next" handleClick={handleSkip} />
            ) : (
              <>
                <Button purpose="modal" label="Skip" handleClick={handleSkip} />
                <Button purpose="modal" label="Next" handleClick={handleNext} />
              </>
            )}
          </StyledModalButtons>
        </StyledModalControls>
      </StyledModal>
    </Blanket>,
    document.getElementById('modal')
  );
};

export { Modal };
