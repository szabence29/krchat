import { render } from 'preact';
import './index.less';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ClientService';
import "./Pwa";

export function App()
{
	let [ renderCount, setRenderCount ] = useState( 1 );
	console.log( "App render count: " + renderCount );
	useEffect( () =>
	{
		const listener = () => setRenderCount( x => x + 1 );
		chatService.addListener( listener );
		return () => chatService.removeListener( listener );
	}, [] );
	return chatService.inbox ? <Main /> : <Login />

}

render( <App />, document.getElementById( 'app' ) );
