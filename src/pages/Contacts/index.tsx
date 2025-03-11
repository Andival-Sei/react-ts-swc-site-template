import styled from "styled-components";

const ContactsContainer = styled.div`
  padding: 2rem;
`;

const ContactTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-block-end: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-block-size: 150px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }
`;

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactTitle>Свяжитесь с нами</ContactTitle>
      <p>Заполните форму ниже, и мы свяжемся с вами в ближайшее время.</p>

      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Ваше имя</Label>
          <Input type="text" id="name" placeholder="Введите ваше имя" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Эл. почта</Label>
          <Input type="email" id="email" placeholder="example@mail.com" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Сообщение</Label>
          <TextArea
            id="message"
            placeholder="Напишите ваше сообщение здесь..."
          />
        </FormGroup>

        <Button type="submit">Отправить</Button>
      </ContactForm>
    </ContactsContainer>
  );
};

export default Contacts;
