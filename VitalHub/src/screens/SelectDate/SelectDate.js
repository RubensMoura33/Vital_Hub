import { useState } from "react";
import { ButtonFull, ContainerSelectDate, LabelSchedule } from "./Style";
import { TextCancel, TitleSelect } from "../SelectClinic/Style";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate";
import InputSelect from "../../components/InputSelect/InputSelect";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { ModalResumeAppointment } from "../../components/ModalResumeAppointment/ModalResumeAppointment";


export const SelectDate = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const Horarios = ["10:30","12:00","12:30","13:00","17:15","17:45","19:00"]  

    const [showModalResume, setShowModalResume] = useState(false)

    return (

            <ContainerSelectDate>
                <TitleSelect>Selecionar Data</TitleSelect>
                <FullCalender
                    selectedDate={selectedDate}
                    handleSelectedDateFn={setSelectedDate}
                />
                <LabelSchedule>Selecione um horário disponível</LabelSchedule>

                <InputSelect
                textButton='Selecionar horário'
                handleSelectedFn={setSelectedTime}
                data={Horarios}
                />
            {/* onPress={() => {setShowModalResume(true)}} */}

            <ButtonFull onPress={() => setShowModalResume(true)}>
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonFull>

                <ModalResumeAppointment
                visible={showModalResume}
                navigation={navigation}
                setShowModalResume={setShowModalResume}
                dataConsulta={selectedDate}
                horarioConsulta={selectedTime}
                />

            <TextCancel onPress={() => {navigation.navigate("Home")}}>Cancelar</TextCancel>
        </ContainerSelectDate>
    )
}