import dynamic from 'next/dynamic';

const DynamicRoute = dynamic(() => import('./DynamicRouting'), {
  ssr: false,
});

const RoutingMachine = (props) => {
  return (
    <DynamicRoute {...props}/>
  )
}

export default RoutingMachine;