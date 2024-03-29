import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ModalTemplate from "./ModalTemplate";

interface SmallModalProps {
  isModal: boolean;
  onToggleModal: () => void;
  title: string;
  content: string;
  buttonName: string;
  onClick: Function;
  isOneLine?: boolean;
}

function SmallModal({
  buttonName,
  title,
  content,
  isModal,
  onClick,
  onToggleModal,
  isOneLine,
}: SmallModalProps) {
  return (
    <ModalTemplate
      width={328}
      height={isOneLine ? 178 : 200}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <SmallModalStyled>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          {content.split("<br />").map((txt) => (
            <React.Fragment key={txt + Math.random()}>
              {txt}
              <br />
            </React.Fragment>
          ))}
        </ModalContent>

        <ModalButtonGroup>
          <CancelButton
            variant="tertiary"
            width="136px"
            height="42px"
            borderRadius="8px"
            onClick={onToggleModal}
          >
            취소
          </CancelButton>
          <Button
            variant="primary"
            width="136px"
            height="42px"
            borderRadius="8px"
            onClick={() => {
              onClick();
              onToggleModal();
            }}
          >
            {buttonName}
          </Button>
        </ModalButtonGroup>
      </SmallModalStyled>
    </ModalTemplate>
  );
}

const SmallModalStyled = styled.div`
  padding: 26px 24px 24px;
`;

const ModalTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${palette.black};
  height: 23px;
  line-height: normal;
  margin-bottom: 18px;
`;

const ModalContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: ${palette.grayDark};
  text-align: center;
  margin-bottom: 24px;
`;

const ModalButtonGroup = styled.div`
  display: flex;
`;

const CancelButton = styled(Button)`
  color: ${palette.grayDark};
  margin-right: 8px;
`;

export default SmallModal;
