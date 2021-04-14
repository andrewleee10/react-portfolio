import React from 'react';
import { 
  Button, 
  Form as Frm, 
  FormGroup, 
  Label, 
  Input, 
  FormText 
} from 'reactstrap';

const Form = (props) => {

  

  return (
      <Frm>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" placeholder="johndoe@email.com" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" placeholder="Let's connect!"/>
        </FormGroup>
        <Button>Submit</Button>
      </Frm>
  )
}

export default Form