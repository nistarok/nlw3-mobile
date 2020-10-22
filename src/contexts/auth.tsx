import React, { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator, View } from "react-native";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as  AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  });


  async function signIn() {
    const res = await auth.signIn();
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user));
    await AsyncStorage.setItem('@RNAuth:token', res.token);
    api.defaults.headers.Authorization = `Baerer ${res.token}`;
    setUser(res.user)

  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
  <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
    {children}
  </AuthContext.Provider>
);}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};