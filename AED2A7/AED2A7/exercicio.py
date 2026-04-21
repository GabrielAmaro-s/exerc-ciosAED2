class Node():
  def __init__(self, valor):
    self.valor = valor
    self.esq = None
    self.dir = None

def inserir(raiz, valor):
  if raiz is None:
    return Node(valor)
  if valor < raiz.valor:
    raiz.esq = inserir(raiz.esq, valor)
  else:
    raiz.dir = inserir(raiz.dir, valor)
  return raiz

def pre(raiz):
    if raiz is None:
      return
    print(raiz.valor, end = ' ')
    pre(raiz.esq)
    pre(raiz.dir)

def pos(raiz):
  if raiz is None:
    return
  pos(raiz.esq)
  pos(raiz.dir)
  print(raiz.valor, end = ' ')


tree = None
valores = [10,5,2,7,15,12,20]
for valor in valores:
    tree = inserir(tree, valor)

print(f"Raiz: {tree.valor}")

pre(tree)
print()
pos(tree)