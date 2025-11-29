import React from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { PortfolioItem } from "../../config/portfolioConfig";

interface DetailPanelProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  POSITION: { bg: "bg-amber-900/30", text: "text-amber-400", border: "border-amber-500" },
  MAKING: { bg: "bg-cyan-900/30", text: "text-cyan-400", border: "border-cyan-500" },
  READING: { bg: "bg-emerald-900/30", text: "text-emerald-400", border: "border-emerald-500" },
  SYNTHESIS: { bg: "bg-purple-900/30", text: "text-purple-400", border: "border-purple-500" },
};

const DetailPanel: React.FC<DetailPanelProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const colors = categoryColors[item.category] || categoryColors.POSITION;

  // Simple markdown-like parsing for bold, italic, quotes, and lists
  const parseContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      // Handle blockquotes
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-gray-500 pl-4 my-3 italic text-gray-300"
          >
            {parseInline(line.substring(2))}
          </blockquote>
        );
      }

      // Handle bullet points
      if (line.startsWith("• ") || line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 my-1 text-gray-300">
            {parseInline(line.substring(2))}
          </li>
        );
      }

      // Handle horizontal rules
      if (line === "---") {
        return <hr key={index} className="border-gray-700 my-4" />;
      }

      // Handle table headers/rows (simple)
      if (line.startsWith("|")) {
        const cells = line.split("|").filter((c) => c.trim());
        if (cells.every((c) => c.trim().match(/^-+$/))) {
          return null; // Skip separator row
        }
        return (
          <div key={index} className="flex gap-4 my-1 text-sm">
            {cells.map((cell, i) => (
              <span key={i} className="flex-1 text-gray-300">
                {cell.trim()}
              </span>
            ))}
          </div>
        );
      }

      // Handle empty lines
      if (line.trim() === "") {
        return <div key={index} className="h-3" />;
      }

      // Regular paragraph
      return (
        <p key={index} className="my-2 text-gray-300 leading-relaxed">
          {parseInline(line)}
        </p>
      );
    });
  };

  // Parse inline formatting (bold, italic)
  const parseInline = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    let keyIndex = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Italic
      const italicMatch = remaining.match(/\*(.+?)\*/);

      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.substring(0, boldMatch.index));
        }
        parts.push(
          <strong key={`bold-${keyIndex++}`} className="font-semibold text-white">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
      } else if (italicMatch && italicMatch.index !== undefined && !italicMatch[0].startsWith("**")) {
        if (italicMatch.index > 0) {
          parts.push(remaining.substring(0, italicMatch.index));
        }
        parts.push(
          <em key={`italic-${keyIndex++}`} className="italic text-gray-400">
            {italicMatch[1]}
          </em>
        );
        remaining = remaining.substring(italicMatch.index + italicMatch[0].length);
      } else {
        parts.push(remaining);
        break;
      }
    }

    return parts;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative h-full w-full max-w-xl bg-gray-900/95 border-l ${colors.border}
                    overflow-y-auto transform transition-transform duration-300 ease-out
                    animate-slideIn`}
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "slideIn 0.3s ease-out forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700
                     transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Category tag */}
        <div className="p-6 pb-0">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}
          >
            {item.category}
          </span>
        </div>

        {/* Header */}
        <div className="p-6 pt-4">
          <h1 className="text-2xl font-serif font-bold text-white mb-2">
            {item.title}
          </h1>
          {item.subtitle && (
            <h2 className="text-lg text-gray-400 font-medium">{item.subtitle}</h2>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6">{parseContent(item.panelContent)}</div>

        {/* Links */}
        {item.links && (Object.keys(item.links).length > 0) && (
          <div className="px-6 pb-8 flex gap-4">
            {item.links.github && (
              <a
                href={item.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700
                           rounded-lg text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
            {item.links.demo && (
              <a
                href={item.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700
                           rounded-lg text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800 text-sm text-gray-500">
          <p>Rong (Coco) Wu | EDU T564A | Fall 2025</p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DetailPanel;
