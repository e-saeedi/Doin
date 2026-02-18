import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

interface NavbarProps {
  onAddTaskClick: () => void;
  onHomePageClick: () => void;
  onTaskListClick: () => void;
}

const screenWidth = Dimensions.get('window').width;

const Navbar: React.FC<NavbarProps> = ({
  onAddTaskClick,
  onHomePageClick,
  onTaskListClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-screenWidth))[0];

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -screenWidth,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => setMenuOpen(false));
    }
  };
// ------------------------------------


  const closeMenuAndNavigate = (callback: () => void) => {
  Animated.timing(slideAnim, {
    toValue: -screenWidth,
    duration: 300,
    useNativeDriver: false,
  }).start(() => {
    setMenuOpen(false);
    callback();
  });
};
// ------------------------------------



  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.title}>SimpleTask</Text>
        <Pressable onPress={toggleMenu} style={styles.hamburger}>
          <Text style={styles.hamburgerText}>☰</Text>
        </Pressable>
      </View>

      {menuOpen && (
        <Animated.View style={[styles.menu, { right: slideAnim }]}>
          <Pressable onPress={() => closeMenuAndNavigate(onHomePageClick)} style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </Pressable>
          <Pressable onPress={() => closeMenuAndNavigate(onAddTaskClick)} style={styles.menuItem}>
            <Text style={styles.menuText}>Add Task</Text>
          </Pressable>
          <Pressable onPress={() => closeMenuAndNavigate(onTaskListClick)} style={styles.menuItem}>
            <Text style={styles.menuText}>Task List</Text>
          </Pressable>
          <Pressable onPress={toggleMenu} style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </Pressable>
        </Animated.View>
      )}
    </>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#b7b7b7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburger: {
    padding: 10,
  },
  hamburgerText: {
    color: 'black',
    fontSize: 28,
  },
  menu: {
    position: 'absolute',
    top: 60,
    bottom: 0,
    width: '50%',
    backgroundColor: '#2b2b2b',
    paddingTop: 20,
    zIndex: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
  },
});
