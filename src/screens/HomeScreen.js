import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  Modal 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const HomeScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = ['HOME', 'CATALOG', 'ABOUT US', 'CONTACT US'];

  const bannerData = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
      title: 'OWN THE UNREPEATABLE',
      subtitle: 'THIS JACKET IS 1 OF 1'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016051',
      title: 'NEW COLLECTION',
      subtitle: 'SUMMER 2024'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016052',
      title: 'EXCLUSIVE DEALS',
      subtitle: 'UP TO 50% OFF'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1} 
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  // Handle navigation here
                  setMenuVisible(false);
                }}
              >
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Image 
            source={require('../assets/logo.webp')}
            style={styles.logo}
          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="cart-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {bannerData.map((item, index) => (
              <View key={item.id} style={styles.bannerSlide}>
                <Image 
                  source={{ uri: item.image }}
                  style={styles.bannerImage}
                />
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerTitle}>{item.title}</Text>
                  <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Trendy Item</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>FEATURED</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>BEST SELLING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>TRENDS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text>NEW</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Recent Posts Section */}
        <View style={styles.recentPosts}>
        { /* <Text style={styles.sectionTitle}>Recent Posts</Text>*/}
          <View style={styles.postCard}>
            <Image 
              style={styles.postImage}
              source={{ uri: 'https://placeholder.com/150' }}
            />
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>Reversible Crochet Trucker Jacket</Text>
              <Text style={styles.postDescription}>Jacket</Text>
              <Text style={styles.postDate}>₨ 25,000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerIcon: {
    padding: 5,
  },
  menuButton: {
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  notificationButton: {
    padding: 8,
  },
  categoriesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',  // Add this line to center the text
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  recentPosts: {
    padding: 16,
  },
  postCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  postContent: {
    flex: 1,
    marginLeft: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  postDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bannerContainer: {
    width: '100%',
    height: 300,
  },
  bannerSlide: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  bannerSubtitle: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default HomeScreen;