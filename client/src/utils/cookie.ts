
export const getCookieValue = (name: string): string|null => {
    const cookies = document.cookie;

    const twoParts = cookies.split(`${name}=`);
    if (twoParts.length < 2) {
        return null;
    }

    const withValuePart = twoParts[1];

    const withValueParts = withValuePart.split(';');

    return withValueParts[0];
};
