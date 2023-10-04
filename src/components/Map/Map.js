import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const Map = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div style={{ aspectRatio: width / height, paddingRight: '3em',paddingLeft:'3em',paddingTop:'1em'}}>
      <DynamicMap {...props} style={{boxShadow: "0px 0px 3px 7px gray", "border-radius":"3px" }}/>
    </div>
  )
}

export default Map;