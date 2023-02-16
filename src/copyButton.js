import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { TbCheck, TbCopy } from "react-icons/tb";
function Copy(props) {
  return (
    <CopyButton value={props.value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <TbCheck size={24} /> : <TbCopy size={24} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
export default Copy
