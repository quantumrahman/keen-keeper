import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { getStats } from '../../utils/getStats.js'
import useTimeline from '../../hooks/useTimeline.jsx'


ChartJS.register(ArcElement, Tooltip, Legend);


const StatsChart = () => {
    const { timeline } = useTimeline();

    const stats = getStats(timeline);
    
    const data = {
      labels: ['Text', 'Call', 'Video'],
      datasets: [
        {
          data: [
            stats.message,
            stats.call,
            stats.video,
          ],
          backgroundColor: [
            '#7C3AED',
            '#1F3D36',
            '#3FA46A',
          ],
          borderWidth: 5,
          borderColor: '#ffffff',
          borderRadius: 8,
          hoverOffset: 0,
          hoverBorderWidth: 0,
          hoverBorderColor: 'transparent',
        },
      ],
    };
    
    const options = {
      cutout: '70%',
      events: ['mousemove', 'mouseout'],
      hover: {
        mode: null,
      },
      animation: {
        duration: 0,
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
    };

    return (
        <>
            <div className='w-[200px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[350px] flex items-center justify-center'>
              <Doughnut data={data} options={options} />
            </div>
        </>
    );
};

export default StatsChart;