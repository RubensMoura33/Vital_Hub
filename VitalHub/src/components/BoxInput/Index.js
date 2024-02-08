import { ProfileInput } from "../Input/Index"
import { Label } from "../Label/Index"
import { Content } from "./Style"

export const BoxInput = ({
    fieldWidth = 100,
    textLabel,
    placeholder,
    value = null,
    editable
}) => {
    return(
        <Content fieldWidth={fieldWidth}>
        <Label
        textLabel={textLabel}/>
        <ProfileInput
        placeholder={placeholder}
        value={value}
        editable={editable}
        />
        </Content>
    )
}