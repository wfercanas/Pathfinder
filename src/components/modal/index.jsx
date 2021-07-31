import React, { useState } from 'react';
import { Button } from '../buttons';
import { StyledModal, StyledModalControls, StyledModalButtons } from './style';

const Modal = ({ labels }) => {
  const handleNext = () => {
    setSteps((prev) => prev + 1);
  };

  const handleSkip = () => {};

  const [step, setSteps] = useState(0);
  return (
    <StyledModal>
      <p>{labels[step]}</p>
      <StyledModalControls>
        <p>
          {step + 1}/{labels.length}
        </p>
        <StyledModalButtons>
          {step + 1 === labels.length ? (
            <Button type="modal" label="Next" />
          ) : (
            <>
              <Button type="modal" label="Skip" onClick={handleSkip} />
              <Button type="modal" label="Next" handleClick={handleNext} />
            </>
          )}
        </StyledModalButtons>
      </StyledModalControls>
    </StyledModal>
  );
};

export { Modal };
