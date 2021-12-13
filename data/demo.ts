import { HiChevronRight } from "react-icons/hi";
import { DemoRowItemProps } from "../components/demo/DemoRowItem";

export const demos: DemoRowItemProps[] = [
    {
        title: 'Basic usage',
        description: 'Take a look at the simplest and basic way to use Simplemail.',
        route: '/demo/basic',
        icon: HiChevronRight
    },
]

export interface Parameter {
    name: string;
    description: string;
    isRequired: boolean;
    defaultText?: string
}

export const basicParameters: Parameter[] = [
    {
        name: 'email',
        description: 'The email of the receiver.',
        isRequired: true,
        defaultText: "youremail@gmail.com"
    },
    {
        name: 'from',
        description: 'The email of the sender.  Same as the one that provided in smtp_user.',
        isRequired: true,
        defaultText: "youremail@gmail.com"
    },
    {
        name: 'subject',
        description: 'The subject of the mail.',
        isRequired: true,
        defaultText: "Hello world"
    },
    {
        name: 'text',
        description: 'The text of the email. If html is provided, this field will be overwritten.',
        isRequired: true,
        defaultText: "Hello world"
    },
    {
        name: 'smtp_user',
        description: 'The email of your Gmail account.',
        isRequired: true,
        defaultText: "abc@gmail.com"
    },
    {
        name: 'smtp_pass',
        description: 'The app password of your Gmail account.',
        isRequired: true,
        defaultText: "..."
    },
]