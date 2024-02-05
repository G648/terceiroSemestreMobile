import { InputText } from "./style"

export const Input = ({
    placeholder,
    editable,
    KeyType,
    maxLength,
    fieldValue,
    onChangeText
}) => {
    return (
        <InputText
            placeholder={placeholder}
            editable={editable}
            KeyType={KeyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}