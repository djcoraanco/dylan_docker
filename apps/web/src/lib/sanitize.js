import DOMPurify from 'dompurify';

/**
 * Restrictive HTML sanitizer built on DOMPurify.
 *
 * Use `sanitizeHtml()` for ANY future insertion of untrusted markup via
 * `innerHTML` or `dangerouslySetInnerHTML`. It:
 *   - allows only an explicit, minimal tag/attribute allowlist,
 *   - blocks all event-handler attributes (on*) and inline `style`,
 *   - strips `javascript:` and `data:text/html` URIs from href/src,
 *   - hardens outbound anchors with rel="noopener noreferrer nofollow".
 *
 * DOMPurify already strips on* handlers and javascript: URIs by default; the
 * allowlist and after-sanitize hook below add defense-in-depth so a future
 * DOMPurify config change cannot silently re-enable them.
 */

const ALLOWED_TAGS = [
  'a', 'b', 'br', 'div', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'i', 'li', 'ol', 'p', 'span', 'strong', 'ul', 'blockquote', 'code', 'pre',
];

const ALLOWED_ATTR = [
  'href', 'src', 'alt', 'title', 'class', 'id', 'rel', 'target',
  'width', 'height', 'colspan', 'rowspan',
];

// Explicitly forbidden attributes (defense-in-depth on top of the allowlist).
const FORBID_ATTR = [
  'style',
  'onerror', 'onload', 'onclick', 'onmouseover', 'onmouseenter',
  'onmouseleave', 'onsubmit', 'onfocus', 'onblur', 'onchange', 'oninput',
  'onanimationstart', 'onanimationend', 'ontoggle',
];

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (!node || typeof node.getAttribute !== 'function') return node;

  // Block javascript: / data:text/html URIs even when href/src are allowed.
  ['href', 'src', 'xlink:href', 'formaction'].forEach((attr) => {
    if (node.hasAttribute(attr)) {
      const val = (node.getAttribute(attr) || '').trim().toLowerCase();
      if (
        val.startsWith('javascript:') ||
        val.startsWith('data:text/html') ||
        val.startsWith('vbscript:')
      ) {
        node.removeAttribute(attr);
      }
    }
  });

  // Harden outbound anchors.
  if (node.tagName === 'A' && node.hasAttribute('href')) {
    node.setAttribute('rel', 'noopener noreferrer nofollow');
    if (!node.getAttribute('target')) {
      node.setAttribute('target', '_blank');
    }
  }

  return node;
});

export function sanitizeHtml(dirty) {
  if (typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    FORBID_ATTR,
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'textarea', 'link', 'meta', 'base'],
  });
}

export default sanitizeHtml;
