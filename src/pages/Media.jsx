import React, { useEffect, useState, useRef, useCallback } from 'react';

const Media = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);

  const apiKey = 'AIzaSyCTOnyGUPusQcGzVO2WHbbTuS5Y80tDNh4';
  const channelId = 'UCzFcmsnTenuIb1gjQzZcuzA';
  const maxResults = 12;

  const fetchVideos = useCallback(async (pageToken = '') => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&pageToken=${pageToken}`
      );
      if (!res.ok) throw new Error('Failed to fetch videos');
      const data = await res.json();
      const newVideos = data.items.filter(item => item.id.videoId);
      setVideos((prev) => [...prev, ...newVideos]);
      setNextPageToken(data.nextPageToken || '');
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  // Infinite Scroll Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken && !loading) {
          fetchVideos(nextPageToken);
        }
      },
      { threshold: 0.5 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [nextPageToken, loading, fetchVideos]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Video Gallery</h1>
        <p style={styles.subtitle}>Explore our latest YouTube content</p>
      </header>
      
      <main style={styles.main}>
        {error && (
          <div style={styles.error}>
            <p>{error}</p>
            <button onClick={() => fetchVideos()} style={styles.retryButton}>
              Retry
            </button>
          </div>
        )}
        
        {videos.length === 0 && !loading ? (
          <div style={styles.emptyState}>
            <p>No videos found</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {videos.map((video) => (
              <div key={video.id.videoId} style={styles.card}>
                <div style={styles.videoWrapper}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={styles.video}
                  />
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.videoTitle}>{video.snippet.title}</h3>
                  <p style={styles.videoDate}>
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {loading && (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p>Loading more videos...</p>
          </div>
        )}
        
        <div ref={loaderRef} style={styles.observer}></div>
      </main>
      
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} My YouTube Channel</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  //page color
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    color: '#333',
  },
  header: {
    backgroundColor: '#ebff86',
    color: 'black',
    padding: '2rem 1rem',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 0.5rem',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '0',
    opacity: '0.9',
  },
  main: {
    flex: '1',
    padding: '2rem 1rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '1rem 0',
  },
  card: {
    backgroundColor: '#ebff86',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'flex',
    flexDirection: 'column',
  },
  cardBody: {
    padding: '1rem',
    flex: '1',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: '0',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: 'none',
  },
  videoTitle: {
    fontSize: '1rem',
    margin: '0 0 0.5rem',
    fontWeight: '600',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  videoDate: {
    fontSize: '0.875rem',
    color: '#666',
    margin: '0',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: '#666',
  },
  spinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#ff0000',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem',
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
    padding: '1rem',
    borderRadius: '4px',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  retryButton: {
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '0.5rem',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  emptyState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#666',
  },
  observer: {
    height: '1px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    fontSize: '0.875rem',
  },
};

// Add global styles for the spinner animation
const styleElement = document.createElement('style');
styleElement.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleElement);

export default Media;