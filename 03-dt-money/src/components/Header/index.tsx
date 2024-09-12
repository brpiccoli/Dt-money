import { useState } from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Controle de finanças</h1>

        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal setIsModalOpen={setIsModalOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
