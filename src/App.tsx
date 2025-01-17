import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { store } from '@/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <MantineProvider theme={theme}>
                <Router />
            </MantineProvider>
        </Provider>
    );
}
