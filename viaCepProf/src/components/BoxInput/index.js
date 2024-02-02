import { Label } from "../Label"
import { Input } from "../Input"
import { FieldContent } from './style'


export const BoxInput = ({
    fieldWidth = 100,
    editable = false, //saber qual campo está em modo de exibição
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLength
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label
                textLabel={textLabel}
            />

            <Input
                fieldWidth={fieldWidth}
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
       

    )
}