<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript & DOM Demo</title>
  <script src="script.js" defer></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    header, nav, main, section, footer {
      margin-bottom: 20px;
    }
    button {
      margin-right: 10px;
    }
  </style>
</head>
<body>

  <header>
    <h1 id="main-heading">Hello, DOM World!</h1>
  </header>

  <nav>
    <a href="#">Home</a> | 
    <a href="#">About</a>
  </nav>

  <main>
    <section id="content">
      <p>This is an example of DOM manipulation with JavaScript.</p>
    </section>

    <button onclick="changeHeadingText()">Change Heading</button>
    <button onclick="changeBackgroundColor()">Change Background</button>
    <button onclick="toggleParagraph()">Add/Remove Paragraph</button>
  </main>

  <footer>
    <p>&copy; 2025 DOM Mastery</p>
  </footer>

</body>
</html>
