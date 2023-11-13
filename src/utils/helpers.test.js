import { formatDate } from "./helpers"; // adjust the import path as necessary

describe("formatDate", () => {
  it("returns the time in the correct format", () => {
    // This is a fixed timestamp for testing (January 1, 1970, 00:00:00 UTC)
    const timestamp = 0;
    const result = formatDate(timestamp);
    // Expected format "HH:MM AM/PM | MM/DD/YYYY"
    expect(result).toMatch(/^\d{1,2}:\d{2}:AM \| \d{1,2}\/\d{1,2}\/\d{4}$/);
  });

  it("handles PM times correctly", () => {
    // Timestamp for January 1, 1970, 13:00:00 UTC (1:00 PM UTC)
    const timestamp = 13 * 60 * 60 * 1000;
    const result = formatDate(timestamp);
    expect(result).toContain("PM"); // Check if 'PM' is included for times after noon
    expect(result).toMatch(/^\d{1,2}:\d{2}:PM \| \d{1,2}\/\d{1,2}\/\d{4}$/); // Complete format check
  });

  it("handles AM times correctly", () => {
    // Timestamp for January 1, 1970, 01:00:00 UTC (1:00 AM UTC)
    const timestamp = 1 * 60 * 60 * 1000;
    const result = formatDate(timestamp);
    expect(result).toContain("AM"); // Check if 'AM' is included for times before noon
    expect(result).toMatch(/^\d{1,2}:\d{2}:AM \| \d{1,2}\/\d{1,2}\/\d{4}$/); // Complete format check
  });

  it("works correctly with different dates", () => {
    // Timestamp for a known date (e.g., July 20, 1969, 20:18 UTC)
    const timestamp = new Date("July 20, 1969, 13:18:00 UTC").getTime();
    const result = formatDate(timestamp);
    // Ensure the date part of the string matches the known date
    expect(result).toContain("1969");
    expect(result).toMatch(/^\d{1,2}:\d{2}:PM \| \d{1,2}\/\d{1,2}\/\d{4}$/); // Complete format check
  });

  it("creates a consistent date snapshot", () => {
    const timestamp = 0; // January 1, 1970, 00:00:00 UTC
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toMatchSnapshot();
  });
});
