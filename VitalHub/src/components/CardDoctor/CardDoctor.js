
// import { TextName } from "../CardClinic/Style"
import { ProfileName } from "../Card/Style"
import { Container, ImageDoctor, TextEspec, ViewData } from "./Style"

export const CardDoctor = ({name, espec, photo, isSelected}) => {
    return(
        <Container isSelected={isSelected}>
            <ImageDoctor source={photo}/>
            <ViewData>
                <ProfileName>{name}</ProfileName>
                <TextEspec>{espec}</TextEspec>
            </ViewData>
        </Container>
    )
}