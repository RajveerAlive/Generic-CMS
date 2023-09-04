import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  rr: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: 'black',
  },
  re: {
    fontSize: '1.1rem',
    color: 'black',
  },
  rt: {
    fontSize: '0.8rem',
    color: 'black',
  },
  table4: {
    backgroundColor:'white',
    position: 'absolute',
    top: 130,
    left: 0,
    margin: '20px',
    width: '450px',
    color: 'black',
    '& th': {
      backgroundColor: '#f2f2f2',
      padding: '5px',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    '& td': {
        textAlign: 'left',
        padding: '0px',
    },
    '& a': {
      textDecoration: 'none',
      color: 'blue',
    },
  },
  
  table2: {
    backgroundColor:'white',
    position: 'absolute',
    top: 40,
    right: 0,
    margin: '50px',
    borderCollapse: 'collapse',
    width: 'auto',
    color: 'black',
    '& th': {
      backgroundColor: '#f2f2f2',
      padding: '10px',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    '& td': {
      padding: '0px',
    },
  },
  
});

export default function WeightLoss(props) {
  const classes = useStyles();
  const {  add } = props;

  return (
    <div>
      <div>
        <table className={classes.table4}>
          <thead>
            <tr>
              <th>Activity Level</th>
              <th>Calorie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=dj03_VDetdw&t=1s" target="_blank" rel="noopener noreferrer">
                  Sedentary: little or no exercise (Home)
                </a>
              </td>
              <td>{add ? Number((add * 1.2).toFixed(0)) : ''}</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=5ARgeR1rMTo" target="_blank" rel="noopener noreferrer">
                    Exercise 1-3 times/week(Home)
                </a>
              </td>
              <td>{add ? Number((add * 1.37).toFixed(0)) : ''}</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">
                    Exercise 4-5 times/week(Home/Gym)
                </a>
              </td>
              <td>{add ? Number((add * 1.46).toFixed(0)) : ''}</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=51VupvTTSno" target="_blank" rel="noopener noreferrer">
                    Daily or intense exercise 3-4 times/week(Gym)
                </a>
              </td>
              <td>{add ? Number((add * 1.55).toFixed(0)) : ''}</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=wYT_h5-dBAk" target="_blank" rel="noopener noreferrer">
                    Intense exercise 6-7 times/week(Gym)
                </a>
              </td>
              <td>{add ? Number((add * 1.71).toFixed(0)) : ''}</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.youtube.com/watch?v=R2TbcQDAVkU" target="_blank" rel="noopener noreferrer">
                    Very intense exercise daily, or physical job(Gym)
                </a>
              </td>
              <td>{add ? Number((add * 1.9).toFixed(0)) : ''}</td>
            </tr>
          </tbody>
          <p className={classes.rt}>Note: click on Activity Level to see reference video</p>
        </table>
      </div>
      <div>
        <table className={classes.table2}>
          <thead>
          <p className={classes.rr}>Result:</p>
             <td>
                <p className={classes.re}>{`${add} Calories/Day`}</p>
            </td>
            <tr>
              <th>Classification</th>
              <th>BMI range - kg/m2</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Severe Thinness</td>
              <td>Less than 16</td>
            </tr>
            <tr>
              <td>Moderate Thinness</td>
              <td>16 - 17</td>
            </tr>
            <tr>
              <td>Mild Thinness</td>
              <td>17-18</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5-25</td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25-30</td>
            </tr>
            <tr>
              <td>Obese Class I</td>
              <td>30-35</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>35-40</td>
            </tr>
            <tr>
              <td>Obese Class III</td>
              <td>Greater than 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
