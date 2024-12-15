```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []); // Fixed: Empty dependency array

  return <div>Count: {count}</div>;
}
```