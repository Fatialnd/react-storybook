import Avatar from "../Avatar";


export default {
    title: "Avatar", 
    component: Avatar,
    args: {
        src: "https://i.imgur.com/OKS67lhm.jpg",
        width: 80,
        className: "avatar"

    },
   argTypes: {
    width: { control: "number"},
    height: {control: "number"},
   }
}

const Template = args => <Avatar {...args} />

export const Rounded = Template.bind({})
Rounded.args = {
    isRounded: true,
}


