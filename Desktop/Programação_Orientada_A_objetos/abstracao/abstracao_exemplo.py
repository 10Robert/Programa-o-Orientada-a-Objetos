from pathlib import Path
import abc

LOG_FILE = Path(__file__).parent / 'log.txt'

class Log(abc.ABC): 
    
    @abc.abstractmethod
    def log(self, msg: str) -> str: 
        return NotImplementedError('Implemente o método Log')
    
    def log_error(self, msg: str) -> str: 
        return self.log(f'Error: {msg}')
    
    def log_error(self, msg: str) -> str: 
        return self.log(f'Sucess: {msg}')
    
class LogFileMixin(Log):
    
    def log(self, msg: str) -> str: 
        msg_formatada = f'{msg} ({self.__class__.__name__})'
        with open(LOG_FILE, 'a') as arquivo:
            arquivo.write(msg_formatada)
            arquivo.write('\n')
            
class LogPrintMixin(Log):
    
    def log(self, msg: str) -> str:
        print(f'{msg} ({self.__class__.__name__})')
        

if __name__ == '__main__':
    l = LogFileMixin()
    l.log_error('Erro')