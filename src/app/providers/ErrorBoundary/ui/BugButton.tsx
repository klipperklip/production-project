import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Component for test error
export const BugButton = () => {
  const { t } = useTranslation('pageError');
  const [error, setError] = useState<boolean>(false);
  const toggleError = () => {
    setError((prev) => !prev);
  };
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={toggleError}>
      {t('Вызвать ошибку')}
    </Button>
  );
};
