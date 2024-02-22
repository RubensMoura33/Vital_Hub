import { InputProfile } from "../Input/Style"
import { InputLabel } from "../Label/Style"
import { Content } from "./Style"

export const BoxInput = ({
    fieldWidth = 100,
    textLabel,
    placeholder,
    value = null,
    editable,
    borderStyle,
    fieldHeight,
    textColor,
    paddingBottom
}) => {
    return(
        <Content fieldWidth={fieldWidth}>

        <InputLabel>{textLabel}</InputLabel>

        <InputProfile
        fieldHeight={fieldHeight}
        placeholder={placeholder}
        value={value}
        editable={editable}
        borderStyle={borderStyle}
        textColor={textColor}
        paddingBottom={paddingBottom}
        />

        </Content>
    )
}