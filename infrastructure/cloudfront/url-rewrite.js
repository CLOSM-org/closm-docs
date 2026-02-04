/**
 * CloudFront Function: URL Rewrite for Static Sites
 *
 * Rewrites URLs to add index.html for directory-style routes.
 * Required because CloudFront + OAC doesn't support S3 index document feature.
 *
 * Examples:
 *   /about     -> /about/index.html
 *   /about/    -> /about/index.html
 *   /          -> /index.html (handled by DefaultRootObject)
 *   /style.css -> /style.css (unchanged)
 *
 * Function Name: closm-docs-url-rewrite
 * Runtime: cloudfront-js-2.0
 */
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Root path is handled by DefaultRootObject setting
    if (uri === '/') {
        return request;
    }

    // Check if URI has a file extension (contains dot after last slash)
    var lastSlashIndex = uri.lastIndexOf('/');
    var afterSlash = uri.substring(lastSlashIndex + 1);
    if (afterSlash.includes('.')) {
        // Has extension, return as-is (e.g., /style.css, /image.png)
        return request;
    }

    // Add index.html for directory-style URLs
    if (uri.endsWith('/')) {
        // /about/ -> /about/index.html
        request.uri = uri + 'index.html';
    } else {
        // /about -> /about/index.html
        request.uri = uri + '/index.html';
    }

    return request;
}
