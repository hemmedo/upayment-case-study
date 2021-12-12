/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import MainNavigation from './src/navigation/main-navigation';
import {makeServer} from './src/mocks/server';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

if (window.server) {
  window.server.shutdown();
} else {
  window.server = makeServer();
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
