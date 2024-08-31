import { useFormik } from 'formik';
import { Pressable, Platform, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup'

const styles = {
  container: {
    padding: 20,
    flexDirection: 'column',
    gap: 15
  },
  notification: {
    marginTop: -10
  },
  
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: theme.colors.warning
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  
  const inValidUsername = formik.touched.username && formik.errors.username
  const inValidPassword = formik.touched.password && formik.errors.password

  return (
    <View style={styles.container}>
      <TextInput
        style={inValidUsername ? [styles.inputError, styles.textInput] : styles.textInput}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.notification} color='warning'>{formik.errors.username}</Text>
      )}
      <TextInput
        style={inValidPassword ? [styles.inputError, styles.textInput] : styles.textInput}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.notification} color='warning'>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color='white' fontWeight='bold' fontSize='subheading'>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignInSubmit = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    console.log(`Username: ${username} Password: ${password}`);
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignInSubmit;
