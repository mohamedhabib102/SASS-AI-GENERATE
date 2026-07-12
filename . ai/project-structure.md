# Project Structure

src/

animations/
Reusable animations.

api/
Global API utilities.

components/

    ui/
        shadcn/ui components

    shared/
        Shared reusable components

    layouts/
        Shared layout components

data/
Static data.

features/

    home/
    about/
    services/
    auth/
    company/
    ...

Every feature follows this structure:

feature-name/

    api/
        API services

    hooks/
        React Query hooks

    schema/
        Validation schemas

    components/
        Feature components

    pages/
        Feature pages

hooks/
Global reusable hooks.

layouts/
Application layouts.

lib/
Library configuration.

Example:

- Axios Instance
- Query Client
- Utility Config

locales/

Translation files.

pages/

Static pages.

Examples:

- NotFound
- Error Pages

providers/

Application providers.

Examples:

- React Query Provider
- Google Provider
- Theme Provider

routes/

Application routing.
