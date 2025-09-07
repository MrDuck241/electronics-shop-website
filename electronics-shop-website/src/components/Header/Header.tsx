import "./Header.css"
import { Flex, Text, Button, Slider } from "@radix-ui/themes";

const Header = () => {
    return (
        <header>
            <span>This is header</span>
            <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
                <Slider defaultValue={[50]} />
            </Flex>
        </header>
    )
}

export default Header;