import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useArgs } from "@storybook/addons";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: "UTILS/Modal",
  component: Modal,
 
};

export default meta;
type Story = StoryObj<typeof Modal>;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onClose, open, ...args }) => {
    return (
      <Modal open={open} onClose={onClose} {...args}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    );
  },
  args: {
    open: false,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Button
            variant="contained"
            onClick={() =>
              updateArgs({
                open: !args?.open,
              })
            }
          >
            Open Modal
          </Button>
          <Story
          />
        </>
      );
    },
  ],
};
