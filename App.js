import React, {useState} from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';

export default function App() {
  const [buttonOneText, setButtonOneText] = useState('Gerar jogo para Mega Sena (Opção 1 - Vetor)');
  const [buttonTwoText, setButtonTwoText] = useState('Gerar jogo para Mega Sena (Opção 2 - If + While)');
  const [buttonClean, setButtonClean] = useState('');
  const [numbersText, setNumbersText] = useState('');
  const [numbersMegaSena, setNumbersMegaSena] = useState([]);

  const test = () => {
    setNumbersMegaSena([]);
    setButtonOneText('Gerar jogo para Mega Sena (Opção 1 - Vetor)');
    setButtonTwoText('Gerar jogo para Mega Sena (Opção 2 - If + While)');
    setNumbersText('');
  }

  const getNumbersMegaSena = () => {
    setNumbersMegaSena([]);
    setButtonTwoText('Gerar jogo para Mega Sena (Opção 2 - If + While)');

    for (let i = 0; i < 6; i++) {
      let number = Math.floor(Math.random() * 61);
      let exists = false;

      console.log(number);

      if (number == 0 || number == 61) {
        while (number == 0 || number == 61) {
          number = Math.floor(Math.random() * 61);
        }
      }

      [...numbersMegaSena].forEach((item) => {
        console.log(number, item.value);
        if (item.value == number) {
          exists = true;
        }
      });

      if (!exists) {
        setNumbersMegaSena((numbersMegaSena) => {
          return [...numbersMegaSena, {key: 'Number: ' + number, value: number}];
        });
      } else {
        while (exists) {
          number = Math.floor(Math.random() * 61);
          exists = false;

          [...numbersMegaSena].forEach((item) => {
            if (item.value == number) {
              exists = true;
            }
          });
        }

        setNumbersMegaSena((numbersMegaSena) => {
          return [...numbersMegaSena, {key: 'Number: ' + number, value: number}];
        });
      }
    }

    setButtonOneText('Gerar novamente');
    setNumbersText('Números para Mega Sena:');
    setButtonClean('Limpar');
  }

  const getNumbersMegaSenaTwo = () => {
    setNumbersMegaSena([]);
    setButtonOneText('Gerar jogo para Mega Sena (Opção 1 - Vetor)');

    let number1 = Math.floor(Math.random() * 61);
    if (number1 == 0 || number1 == 61) {
      while (number1 == 0 || number1 == 61) {
        number1 = Math.floor(Math.random() * 61);
      }
    }

    let number2 = Math.floor(Math.random() * 61);
    if (number2 == 0 || number2 == 61 || number1 == number2) {
      while (number2 == 0 || number2 == 61 || number1 == number2) {
        number2 = Math.floor(Math.random() * 61);
      }
    }

    let number3 = Math.floor(Math.random() * 61);
    if (number3 == 0 || number3 == 61 || number3 == number1 || number3 == number2) {
      while (number3 == 0 || number3 == 61 || number3 == number1 || number3 == number2) {
        number3 = Math.floor(Math.random() * 61);
      }
    }

    let number4 = Math.floor(Math.random() * 61);
    if (number4 == 0 || number4 == 61 || number4 == number1 || number4 == number2 || number4 == number3) {
      while (number4 == 0 || number4 == 61 || number4 == number1 || number4 == number2 || number4 == number3) {
        number4 = Math.floor(Math.random() * 61);
      }
    }

    let number5 = Math.floor(Math.random() * 61);
    if (number5 == 0 || number5 == 61 || number5 == number1 || number5 == number2 || number5 == number3 || number5 == number4) {
      while (number5 == 0 || number5 == 61 || number5 == number1 || number5 == number2 || number5 == number3 || number5 == number4) {
        number5 = Math.floor(Math.random() * 61);
      }
    }

    let number6 = Math.floor(Math.random() * 61);
    if (number6 == 0 || number6 == 61 || number6 == number1 || number6 == number2 || number6 == number3 || number6 == number4 || number6 == number5) {
      while (number6 == 0 || number6 == 61 || number6 == number1 || number6 == number2 || number6 == number3 || number6 == number4 || number6 == number5) {
        number6 = Math.floor(Math.random() * 61);
      }
    }

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number1, value: number1}];
    });

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number2, value: number2}];
    });

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number3, value: number3}];
    });

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number4, value: number4}];
    });

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number5, value: number5}];
    });

    setNumbersMegaSena((numbersMegaSena) => {
      return [...numbersMegaSena, {key: 'Number: ' + number6, value: number6}];
    });

    setButtonTwoText('Gerar novamente');
    setNumbersText('Números para Mega Sena:');
    setButtonClean('Limpar');
  }

  return(
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title={buttonOneText}
          onPress={getNumbersMegaSena}
        />
        <Button
          style={styles.button}
          title={buttonTwoText}
          onPress={getNumbersMegaSenaTwo}
        />
        <Button
          style={styles.button}
          title={buttonClean}
          onPress={test}
        />
      </View>
      <View style={styles.numbersFlatList}>
        <Text style={styles.numberText}>{numbersText}</Text>
        <FlatList
          data={numbersMegaSena}
          renderItem={
            number => (
              <View style={styles.numberOnList}>
                <Text>{number.item.value}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 12
  },
  button: {
    width: '80%'
  },
  numberText: {
    alignSelf: 'center'
  },
  numberOnList: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  numbersFlatList: {
    width: '80%',
    alignSelf: 'center'
  }
});
