export default (table: string) => `
    CREATE TRIGGER "${table}UpdatedAt"
    BEFORE UPDATE ON "${table}"
    FOR EACH ROW
    EXECUTE PROCEDURE onUpdateTimestamp();
  `;
