import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function urls_validators(): ValidatorFn {
  return (control): ValidationErrors | null => {
    const value = control.value as { [key: string]: string };

    if (!value) {
      return { urls: true };
    }

    const has_invalid_url = Object.values(value)
      .filter((value) => value)
      .some(
        (url) =>
          !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
            url,
          ),
      );

    return has_invalid_url ? { urls: true } : null;
  };
}
