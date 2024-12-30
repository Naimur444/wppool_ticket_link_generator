function copyResult() {
    const result = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    // Create a blob with html content
    const blob = new Blob([result.innerHTML], { type: 'text/html' });
    const richTextData = new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([result.innerText], { type: 'text/plain' })
    });

    // Use the new Clipboard API to copy formatted content
    navigator.clipboard.write([richTextData]).then(() => {
        showCopySuccess(copyButton);
    }).catch(err => {
        // Fallback for browsers that don't support clipboard.write
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(result);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        
        showCopySuccess(copyButton);
    });
}

function showCopySuccess(button) {
    // Show success state
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Copied!
    `;
    button.classList.add('copy-success');
    
    // Reset button after 2 seconds
    setTimeout(() => {
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
        `;
        button.classList.remove('copy-success');
    }, 2000);
}

function processTickets() {
    const input = document.getElementById('inputText').value;
    const result = document.getElementById('result');
    
    if (!input.trim()) {
        result.textContent = 'Please enter some ticket data.';
        return;
    }

    // Get selected format
    const format = document.querySelector('input[name="format"]:checked').value;

    // Process each line
    let processedLines = input.split('\n')
        .filter(line => line.trim()) // Remove empty lines
        .map(line => {
            // Match [#number] pattern
            return line.replace(
                /\[#(\d+)\]/g,
                (match, ticketNumber) => {
                    const url = `https://support.wppool.dev/wp-admin/admin.php?page=fluent-support#/tickets/${ticketNumber}/view`;
                    return `<span style="font-weight: bold">[<a href="${url}" target="_blank">#${ticketNumber}</a>]</span>`;
                }
            );
        });

    // Apply formatting based on selection
    let formattedOutput;
    if (format === 'bullets') {
        formattedOutput = '<ul style="margin: 0; padding-left: 20px;">' + 
            processedLines.map(line => `<li style="margin: 0.5em 0;">${line}</li>`).join('') + 
            '</ul>';
        result.className = 'bullets';
    } else if (format === 'numbers') {
        formattedOutput = '<ol style="margin: 0; padding-left: 20px;">' + 
            processedLines.map(line => `<li style="margin: 0.5em 0;">${line}</li>`).join('') + 
            '</ol>';
        result.className = 'numbers';
    } else {
        formattedOutput = processedLines.map(line => `<div style="margin: 0.5em 0;">${line}</div>`).join('');
        result.className = '';
    }

    // Display the result with clickable links
    result.innerHTML = formattedOutput;
}