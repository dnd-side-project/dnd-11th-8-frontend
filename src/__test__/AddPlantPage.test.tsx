import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import AddPlantPage from '@/pages/AddPlantPage';
import { Wrapper } from '@/__test__/helpers/wrapper.tsx';
import userEvent from '@testing-library/user-event';

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

describe('내 식물 등록 페이지 테스트', () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<AddPlantPage />, { wrapper: Wrapper });
  });
  it('식물 종류 입력 텍스트 필드를 클릭하면 식물 종류 검색 페이지가 나타난다.', async () => {
    const plantTypeInput = screen.getByLabelText('식물 종류');

    await user.click(plantTypeInput);

    const plantTypeSearchInput = screen.getByPlaceholderText('식물 종류 검색');
    expect(plantTypeSearchInput).toBeInTheDocument();
  });

  it('식물 종류 검색시 검색 결과가 나타난다.', async () => {
    const plantTypeInput = screen.getByLabelText('식물 종류');

    await user.click(plantTypeInput);

    const plantTypeSearchInput = screen.getByPlaceholderText('식물 종류 검색') as HTMLInputElement;

    await waitFor(
      async () => {
        await user.type(plantTypeSearchInput, '몬스테라');
        expect(plantTypeSearchInput.value).toBe('몬스테라');
      },
      { timeout: 2000 },
    );

    await waitFor(
      async () => {
        const plantTypeSearchResult = await screen.findByText(/몬스테라/);
        expect(plantTypeSearchResult).toBeInTheDocument();
      },
      { timeout: 4000 },
    );
  });

  it('검색 결과 클릭시 화면이 사라지고 선택한 식물의 값이 텍스트 필드에 표기된다', async () => {
    const plantTypeInput = screen.getByLabelText('식물 종류') as HTMLInputElement;

    await user.click(plantTypeInput);

    const plantTypeSearchInput = screen.getByPlaceholderText('식물 종류 검색') as HTMLInputElement;

    await waitFor(
      async () => {
        await user.type(plantTypeSearchInput, '몬스테라');
        expect(plantTypeSearchInput.value).toBe('몬스테라');
      },
      { timeout: 2000 },
    );

    await waitFor(
      async () => {
        const plantTypeAddButton = await screen.findByRole('button', {
          name: /add-searched-result-button/,
        });

        await user.click(plantTypeAddButton);
      },
      { timeout: 4000 },
    );

    expect(plantTypeSearchInput).not.toBeInTheDocument();

    expect(plantTypeInput.value).include('몬스테라');
  });
});
