import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import Table from './table';
import { Link } from 'react-router-dom';
import { useMyContext } from '../context/Context';


const useStyles = makeStyles((theme) => ({
    
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    color: 'black',
  },
  areaInput: {
    backgroundColor:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
  },
  button: {
    margin: theme.spacing(2),
  },
  result: {
    margin: theme.spacing(1),
  },
  results: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    margin: theme.spacing(1),
  },
  site: {
    margin: theme.spacing(2),
  },
  backButton: {
    margin: theme.spacing(2),
  },
}));

export default function Bmr() {
  const {backColor}=useMyContext();
  const classes = useStyles();

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');
  const [Cal, setCal] = useState('');
  const [gender, setGender] = useState('');
  const [add, setAdd] = useState('');
  const [table, setTable] = useState(false);
  const [site] = useState([]);

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);
    let Cal;
    let add;

    if (gender.toLowerCase() === 'm' || gender.toUpperCase() === 'M') {
      Cal = 10 * weight + 6.25 * height - 5 * age + 5;
      add = Cal;
    } else if (gender.toLowerCase() === 'f' || gender.toUpperCase() === 'F') {
      Cal = 10 * weight + 6.25 * height - 5 * age - 161;
      add = Cal;
    } else {
      setMessage('Invalid gender');
      return;
    }

    if (bmi < 16) {
      setMessage(' of Severe Thinness. ');
    } else if (bmi >= 16 && bmi < 17) {
      setMessage(' of Moderate Thinness. ');
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage(' of Mild Thinness. ');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage(' of Healthy weight. ');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage(' of Overweight. ');
    } else if (bmi >= 30 && bmi < 35) {
      setMessage(' of Obese Class I. ');
    } else if (bmi >= 35 && bmi < 40) {
      setMessage(' of Obese Class II. ');
    } else if (bmi >= 40) {
      setMessage(' of Obese Class III. ');
    }

    setBMI('Your BMI is ' + bmi.toFixed(2));
    setCal(' and your daily calorie needs are ' + Cal.toFixed(0));
    setAdd(add.toFixed(0));
    setTable(true);
  }

  return (
    <div className={classes.root} style={{ background:`${backColor?backColor : "white"}`}}>
      <Typography variant="h6">BMI Calculator</Typography>
      <Typography>
        Let's calculate your Body Mass Index. <br /> Type the values below
      </Typography>
  
      <div className={classes.areaInput}>
        <TextField
          value={gender}
          type="text"
          label="Gender ('M' or 'F')"
          onChange={(e) => setGender(e.target.value)}
        />
        <TextField
          value={age}
          type="number"
          label="Age (in Years)"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <TextField
          value={height}
          type="number"
          label="Height (in cm)"
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <TextField
          value={weight}
          type="number"
          label="Weight (in kg)"
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <div>
          <Button
            onClick={calculateBMI}
            variant="contained"
            className={classes.button}
          >
            Calculate
          </Button>
          <Button
            component={Link}
            to="/"
            variant="contained"
            className={classes.button}
          >
            Go back
          </Button>
        </div>
      </div>
  
        <Typography variant="subtitle1" className={`${classes.results} ${classes.bolds}`}>
            {bmi}
            {message}
        </Typography>
  
      <div className={classes.result}>
        <Table Cal={Cal} table={table} add={add} />
      </div>
  
      <div className={classes.site}>
        <Typography variant="h6">{site.title}</Typography>
  
        <div className="iimg">
          {site.mainImage && site.mainImage.asset && (
            <img
              src={site.mainImage.asset.url}
              alt={site.title}
              title={site.title}
              className="blog"
            />
          )}
        </div>
      </div>
    </div>
  );
  
}
