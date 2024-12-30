# WPPOOL Ticket Link Generator

A web-based tool for converting WPPOOL support ticket references into clickable links. This tool helps support staff quickly generate and share properly formatted ticket links.

## Features

- **Automatic Link Generation**: Converts ticket numbers (e.g., [#1153]) into clickable links
- **Multiple Formatting Options**: 
  - No Format (plain text)
  - Bullet Points
  - Numbered List
- **Rich Text Copy**: Copy formatted text with preserved links and styling
- **Responsive Design**: Works on all device sizes
- **WPPOOL Branding**: Matches WPPOOL's visual identity

## Usage

1. **Input Format**
   ```
   [#1153] - Problem with plugin installation. (EchoRewards)
   [#958] - Refund request. (FlexTable)
   ```

2. **Output Format**
   The tool generates links in the format:
   ```
   https://support.wppool.dev/wp-admin/admin.php?page=fluent-support#/tickets/{ticket_number}/view
   ```

### Steps to Use

1. Paste your ticket list in the input area
2. Select your preferred format (No Format, Bullet Points, or Numbers)
3. Click "Generate Links"
4. Use the copy button to copy the formatted result

### Features Details

#### Link Generation
- Automatically detects ticket numbers in the format [#XXXX]
- Converts them to clickable links
- Maintains the original text format
- Preserves ticket context and descriptions

#### Formatting Options
- **No Format**: Maintains the original text structure
- **Bullet Points**: Converts each ticket to a bulleted list item
- **Numbers**: Creates a numbered list of tickets

#### Copy Functionality
- Copies text with preserved formatting
- Maintains clickable links
- Preserves line breaks and spacing
- Shows visual feedback when copied

## Technical Implementation

### Technologies Used
- HTML5
- CSS3
- JavaScript
- SVG for icons
- Modern Clipboard API with fallback support

### Browser Support
- Works in all modern browsers
- Includes fallback for older browsers
- Responsive design for mobile devices

## Installation

1. Download all files to your local machine or server
2. Open the HTML file in a web browser
3. No additional setup or dependencies required

## Development

### File Structure
```
ticket-link-generator/
├── index.html    # Main application file
├── README.md     # This documentation
```

### Customization
You can customize the tool by:
- Modifying the CSS styles
- Adjusting the link format in the JavaScript code
- Adding additional formatting options

## Contributing

If you'd like to contribute to this project:
1. Fork the repository
2. Create your feature branch
2. Commit your changes
3. Push to the branch
4. Create a new Pull Request

## Support

For support issues or feature requests, please:
1. Check existing issues in the repository
2. Create a new issue with a detailed description
3. Include steps to reproduce any bugs

## License

This project is part of WPPOOL's internal tools. All rights reserved.

## Credits

Developed for WPPOOL support team to streamline ticket handling processes.