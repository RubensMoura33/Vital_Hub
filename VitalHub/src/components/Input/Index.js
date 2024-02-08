import { InputProfile } from "./Style"

export const ProfileInput = ({
    placeholder,
    value,
    editable
}) => {
    return(
        <InputProfile
        editable={editable}
        placeholder={placeholder}
        value={value}
        />
    )
}