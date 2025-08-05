# 🚀 Pretty tRPC

A beautiful, developer-friendly tool for visualizing and debugging tRPC batch requests and responses. Decode complex tRPC batch URLs and responses with an intuitive interface that makes understanding your API calls effortless.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🔍 **Intelligent Parsing**

- **URL Decoding**: Automatically handles URL-encoded tRPC batch request URLs
- **Response Parsing**: Extracts data from complex tRPC response structures (`result.data.json`)
- **Error Handling**: Clear feedback for invalid URLs or malformed JSON

### 🎨 **Beautiful Visualization**

- **Side-by-Side Layout**: Request URLs and response JSON in dual input areas
- **Procedure Mapping**: Automatically matches responses to their corresponding procedures
- **Color-Coded Sections**: Blue dots for requests, green dots for responses
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Mode Support**: Automatic theme switching based on system preferences

### 🔧 **Developer Experience**

- **Real-Time Parsing**: Updates automatically as you type or paste
- **JSON Formatting**: Pretty-printed JSON with syntax highlighting
- **Scrollable Content**: Handles large batches gracefully
- **Index Tracking**: Clear numbering for easy reference

### 🎯 **Flexible Input Modes**

- **URL Only**: Visualize just the request procedures and inputs
- **Response Only**: Parse and display response data without the URL
- **Combined View**: See both requests and responses mapped together

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pretty-trpc.git
   cd pretty-trpc
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3003](http://localhost:3003) to see the application.

## 📖 Usage

### Basic Usage

1. **Paste a tRPC batch request URL** in the left textarea:

   ```
   https://app.example.com/api/trpc/users.getUser,posts.getPosts?batch=1&input={"0":{"json":{"userId":"123"}},"1":{"json":null}}
   ```

2. **Paste the corresponding response JSON** in the right textarea:

   ```json
   [
     { "result": { "data": { "json": { "id": "123", "name": "John Doe" } } } },
     {
       "result": { "data": { "json": [{ "id": "1", "title": "Hello World" }] } }
     }
   ]
   ```

3. **View the parsed results** with procedures, inputs, and responses clearly mapped and formatted.

### Example tRPC Batch Request

```
https://app.example.com/api/trpc/users.getUser,posts.getPosts?batch=1&input={"0":{"json":{"userId":"123"}},"1":{"json":null}}
```

This will be parsed into:

- **Procedure 0**: `users.getUser` with `{"userId":"123"}` input
- **Procedure 1**: `posts.getPosts` with `null` input

## 🏗️ Architecture

The project is built with a clean, modular architecture:

```
src/
├── app/                     # Next.js App Router
│   └── page.tsx            # Main page (49 lines)
├── components/
│   └── trpc/               # tRPC-specific components
│       ├── TRPCDecoder.tsx     # Main orchestrator (43 lines)
│       ├── TRPCInputSection.tsx # Input textareas (58 lines)
│       ├── TRPCBatchDisplay.tsx # Results display (36 lines)
│       └── TRPCBatchItem.tsx   # Individual items (57 lines)
├── hooks/
│   └── useTRPCParser.ts    # Custom parsing hook (74 lines)
├── lib/
│   ├── trpc-parser.ts      # Main parser utilities (51 lines)
│   ├── trpc-url-parser.ts  # URL parsing logic (51 lines)
│   └── trpc-response-parser.ts # Response parsing (23 lines)
└── types/
    └── trpc.ts             # TypeScript definitions (16 lines)
```

### Design Principles

- **🎯 Single Responsibility**: Each file has one clear purpose
- **📦 Modular**: Easy to test, maintain, and extend
- **🔥 Performance**: Optimized for Next.js 15 with proper hydration
- **📏 Maintainable**: All files under 100 lines

## 🛠️ Technology Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://react.dev/)** - UI library with hooks and modern patterns

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure all files stay under 100 lines
5. Test your changes thoroughly
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by the need for better tRPC debugging tools

---

<p align="center">Made with ❤️ for the tRPC community</p>
